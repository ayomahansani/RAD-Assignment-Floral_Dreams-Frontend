function Equipments() {
    return (
        <>
            <div className="d-flex justify-content-center" style={{ marginTop: '20px' }}>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    {/* First Column: 6 out of 12 */}
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="inputField4" className="form-label">Input Field 4</label>
                                            <select className="form-select" id="inputField4">
                                                <option value="">Select an Option</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField1" className="form-label">Input Field 1</label>
                                            <input type="text" className="form-control" id="inputField1" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField4" className="form-label">Input Field 4</label>
                                            <select className="form-select" id="inputField4">
                                                <option value="">Select an Option</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>

                                    </div>

                                    {/* Second Column: 6 out of 12 */}
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="inputField2" className="form-label">Input Field 2</label>
                                            {/* Replaced input with a button */}
                                            <button type="button" className="btn btn-primary w-100" id="inputField2">Button</button>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="inputField2" className="form-label">Input Field 2</label>
                                            <input type="text" className="form-control" id="inputField2" />
                                        </div>

                                        {/* Dropdown for Input Field 4 */}
                                        <div className="mb-3">
                                            <label htmlFor="inputField4" className="form-label">Input Field 4</label>
                                            <select className="form-select" id="inputField4">
                                                <option value="">Select an Option</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                                {/* New Dropdown (Input Field 7) */}
                                <div className="mb-3">
                                    <label htmlFor="inputField7" className="form-label">Input Field 7</label>
                                    <select className="form-select" id="inputField7">
                                        <option value="">Select an Option</option>
                                        <option value="optionA">Option A</option>
                                        <option value="optionB">Option B</option>
                                        <option value="optionC">Option C</option>
                                    </select>
                                </div>

                                {/* Buttons */}
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-secondary">Clear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <h1>Equipments</h1>
            <table className="table table-striped table-hover w-100">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@johndoe</td>
                    <td>johndoe@example.com</td>
                    <td>
                        <button className="btn btn-sm btn-warning mx-2">Edit</button>
                        <button className="btn btn-sm btn-danger mx-2">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jane</td>
                    <td>Smith</td>
                    <td>@janesmith</td>
                    <td>janesmith@example.com</td>
                    <td>
                        <button className="btn btn-sm btn-warning mx-2">Edit</button>
                        <button className="btn btn-sm btn-danger mx-2">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Paul</td>
                    <td>Walker</td>
                    <td>@paulwalker</td>
                    <td>paulwalker@example.com</td>
                    <td>
                        <button className="btn btn-sm btn-warning mx-2">Edit</button>
                        <button className="btn btn-sm btn-danger mx-2">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Michael</td>
                    <td>Johnson</td>
                    <td>@michaelj</td>
                    <td>michaelj@example.com</td>
                    <td>
                        <button className="btn btn-sm btn-warning mx-2">Edit</button>
                        <button className="btn btn-sm btn-danger mx-2">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Susan</td>
                    <td>Williams</td>
                    <td>@susanwilliams</td>
                    <td>susanwilliams@example.com</td>
                    <td>
                        <button className="btn btn-sm btn-warning mx-2">Edit</button>
                        <button className="btn btn-sm btn-danger mx-2">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

export default Equipments;
