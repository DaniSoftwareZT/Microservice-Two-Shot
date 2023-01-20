import React, { useState, useEffect } from "react";

function ShoeForm() {
    const [formData, setFormData] = useState({
        manufacturer: '',
        model_name: '',
        color: '',
        pic_url: '',
        bin: '',
        bins: []
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const { manufacturer, model_name, color, pic_url, bin } = formData;
        const data = { manufacturer, model_name, color, pic_url, bin };
        const shoeUrl = 'http://localhost:8080/api/shoes/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(shoeUrl, fetchConfig);
        response.ok && setFormData({ manufacturer: '', model_name: '', color: '', pic_url: '', bin: '' });
    }

    const fetchBins = async () => {
        try {
            const url = "http://localhost:8100/api/bins/";
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setFormData(formData => ({ ...formData, bins: data.bins }));
            } else {
                throw new Error('Failed to fetch bins');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBins();
    }, []);

    return (
        <div className="row">
            <div className="offset-1 col-10">
                <div>
                    <form onSubmit={handleSubmit} id="create-shoe-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleInputChange} value={formData.manufacturer} placeholder="Manufacturer" required type="text" name="manufacturer" className="form-control" />
                            <label htmlFor="manufacturer">Manufacturer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleInputChange} value={formData.model_name} placeholder="Model name" required type="text" name="model_name" className="form-control" />
                            <label htmlFor="model_name">Model name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleInputChange} value={formData.color} placeholder="Color" required type="text" name="color" className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleInputChange} value={formData.pic_url} placeholder="Picture URL" required type="url" name="pic_url" className="form-control" />
                            <label htmlFor="color">Picture URL</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleInputChange} value={formData.bin} required name="bin" className="form-select">
                                <option value="">Choose a bin</option>
                                {formData.bins.map(bin => (
                                    <option key={bin.href} value={bin.href}>
                                    {bin.closet_name}
                                </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Add shoe</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }

export default ShoeForm;
