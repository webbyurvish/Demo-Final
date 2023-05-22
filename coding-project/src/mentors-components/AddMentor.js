import React from 'react'

export default function AddMentor() {
    return (
        <div>
            <div className="editprofile">
                <div className="container">
                    <div className="edit-profile">
                        <h2>Update Profile</h2>
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor="text"
                                        ><p>Name</p>
                                            (Please use your real name)</label
                                        >
                                        <input type="text" value="Urvish Vaghasiya" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor="text"
                                        ><p>Title</p>
                                            (e.g. Software Developer)</label
                                        >
                                        <input type="text" value=".Net Developer" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor="text"
                                        ><p>About</p>
                                            (Up to 400 characters)</label
                                        >
                                        <textarea
                                            name="text"
                                            placeholder="I am software developer at surat"
                                            id=""
                                            cols="30"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor="text">Country</label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="multiSelect">
                                        <label htmlFor="text">Spoken Languages</label>
                                        <select multiple className="multiSelect_field">
                                            <option value="chrome">Chrome</option>
                                            <option value="firefox">Firefox</option>
                                            <option value="opera">Opera</option>
                                            <option value="safari">Safari</option>
                                            <option value="edge">Edge</option>
                                            <option value="vivaldi">Vivaldi</option>
                                        </select>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                                        <symbol
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="iconX"
                                        >
                                            <g stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </g>
                                        </symbol>
                                    </svg>
                                </div>
                                <div className="col-lg-6">
                                    <div className="multiSelect">
                                        <label htmlFor="text">Skills (Up to 10)</label>
                                        <select multiple className="multiSelect_field">
                                            <option value="chrome">Chrome</option>
                                            <option value="firefox">Firefox</option>
                                            <option value="opera">Opera</option>
                                            <option value="safari">Safari</option>
                                            <option value="edge">Edge</option>
                                            <option value="vivaldi">Vivaldi</option>
                                        </select>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                                        <symbol
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="iconX"
                                        >
                                            <g stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </g>
                                        </symbol>
                                    </svg>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-input">
                                        <label htmlFor="text"
                                        ><p>Title</p>
                                            (e.g. Software Developer)</label
                                        >
                                        <input type="email" value=".Net Developer" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-text">
                                <p>Available for new mentees</p>
                                <span
                                >Please define how would you like to drive the mentorship and
                                    how many mentees you can take.</span
                                >
                                <div className="formcheckinput">
                                    <label htmlFor="checkbox-text">
                                        <input type="checkbox" name="" id="checkbox-text" />Available
                                        for new mentees
                                    </label>
                                </div>
                                <div className="deleted-btn">
                                    <a href="javascript:void(0)">Delete my account</a>
                                </div>
                                <div className="saveorclose-btn">
                                    <a href="javascriopt:void(0)">Save</a>
                                    <a href="javascriopt:void(0)">Close</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

