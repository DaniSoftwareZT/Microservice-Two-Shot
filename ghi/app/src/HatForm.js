import React, { useState, useEffect } from "react";

function HatForm({ hideModal, handleAddHats }) {
  const [formData, setFormData] = useState({
    fabric: "",
    style_name: "",
    color: "",
    pic_url: "",
    location: "",
    locations: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fabric, style_name, color, pic_url, location } = formData;
    const data = { fabric, style_name, color, pic_url, location };
    const hatUrl = "http://localhost:8090/api/hats/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(hatUrl, fetchConfig);
    response.ok &&
      setFormData({
        ...formData,
        fabric: "",
        style_name: "",
        color: "",
        pic_url: "",
        location: "",
      });

    const response2 = await fetch("http://localhost:8090/api/hats/");
    if (response2.ok) {
      const data = await response2.json();
      const hats = data.hats;
      console.log(hats);
      handleAddHats(hats);
    }
    hideModal();
  };
  const fetchLocations = async () => {
    try {
      const url = "http://localhost:8100/api/locations/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFormData((formData) => ({ ...formData, locations: data.locations }));
      } else {
        throw new Error("Failed to fetch locations");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);
  console.log(formData);
  return (
    <div className="row">
      <div className="offset-1 col-10">
        <div>
          <form onSubmit={handleSubmit} id="create-hat-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleInputChange}
                value={formData.fabric}
                placeholder="Fabric"
                required
                type="text"
                name="fabric"
                className="form-control"
              />
              <label htmlFor="fabric">Fabric</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleInputChange}
                value={formData.style_name}
                placeholder="Style name"
                required
                type="text"
                name="style_name"
                className="form-control"
              />
              <label htmlFor="style_name">Style name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleInputChange}
                value={formData.color}
                placeholder="Color"
                required
                type="text"
                name="color"
                className="form-control"
              />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleInputChange}
                value={formData.pic_url}
                placeholder="Picture URL"
                required
                type="url"
                name="pic_url"
                className="form-control"
              />
              <label htmlFor="color">Picture URL</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleInputChange}
                value={formData.location}
                required
                name="location"
                className="form-select"
              >
                <option value="">Choose a location</option>
                {formData.locations.map((location) => (
                  <option key={location.href} value={location.href}>
                    {location.closet_name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => hideModal()}
            >
              Add hat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HatForm;
