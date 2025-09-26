import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Step2 = ({
  formData,
  handleInputChange,
  errors,
  updateAccompanyingPerson,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#972620]">Personal Information</h2>

      {/* Participant Type */}
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={formData.participantType === "Domestic"}
            onChange={() => handleInputChange("participantType", "Domestic")}
            name="geo"
            className="accent-[#972620] border border-[#CCCCCC]"
          />
          <span>Domestic</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={formData.participantType === "International"}
            onChange={() => handleInputChange("participantType", "International")}
            name="geo"
            className="accent-[#972620] border border-[#CCCCCC]"
          />
          <span>International</span>
        </label>
      </div>

      {/* Country if International */}
      {formData.participantType === "International" && (
        <div>
          <label className="block text-sm mb-2">Country *</label>
          <select
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          >
            <option value="">-- Select Country --</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Eswatini">Eswatini</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Greece">Greece</option>
            <option value="Grenada">Grenada</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Honduras">Honduras</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia">Micronesia</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="North Korea">North Korea</option>
            <option value="North Macedonia">North Macedonia</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestine">Palestine</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Qatar">Qatar</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="South Sudan">South Sudan</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Togo">Togo</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City">Vatican City</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="Other">Other</option>
          </select>
          {formData.country === "Other" && (
            <input
              value={formData.otherCountry || ""}
              onChange={(e) => handleInputChange("otherCountry", e.target.value)}
              placeholder="Enter your country name"
              className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg mt-2"
            />
          )}
          {errors?.country && <p className="text-red-500 text-xs">{errors.country}</p>}
        </div>
      )}

      {/* Name */}
      {/* Name Row (3 inputs) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm mb-1">Title *</label>
          <select
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          >
            <option value="">-- Select Title --</option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
            <option>Dr.</option>
            <option>Prof.</option>
            <option>Mx.</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Full Name *</label>
          <input
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Pronunciation (optional)</label>
          <input
            value={formData.pronunciation}
            onChange={(e) => handleInputChange("pronunciation", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>
      </div>


      <div>
        <label className="block text-sm mb-1">Gender *</label>
        <select
          value={formData.gender}
          onChange={(e) => handleInputChange("gender", e.target.value)}
          className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
        >
          <option value="">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors?.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
      </div>

      {/* DOB + Nationality */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="w-full">
          <label className="block text-sm mb-1">Date of Birth *</label>
          <DatePicker
            selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
            onChange={(date) =>
              handleInputChange("dateOfBirth", date ? date.toISOString().split("T")[0] : "")
            }
            dateFormat="dd/MM/yyyy"
            placeholderText="Select your date of birth"
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
          />
        </div>

        <div className="w-full">
          <label className="block text-sm mb-1">Nationality *</label>
          <input
            value={formData.nationality}
            onChange={(e) => handleInputChange("nationality", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm mb-1">Mother Tongue</label>
          <input
            value={formData.motherTongue}
            onChange={(e) => handleInputChange("motherTongue", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>
      </div>

      {/* Passport / Govt ID */}
      {formData.participantType === "International" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Passport No *</label>
            <input
              value={formData.passportNo}
              onChange={(e) => handleInputChange("passportNo", e.target.value)}
              className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Passport Expiry *</label>
            <DatePicker
              selected={formData.passportExpiry ? new Date(formData.passportExpiry) : null}
              onChange={(date) =>
                handleInputChange("passportExpiry", date ? date.toISOString().split("T")[0] : "")
              }
              dateFormat="dd/MM/yyyy"
              placeholderText="Select expiry date"
              className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
              showMonthDropdown
              showYearDropdown
              scrollableYearDropdown
            />
          </div>
        </div>
      ) : (
        <div>
          <label className="block text-sm mb-1">Government ID *</label>
          <input
            value={formData.govtId}
            onChange={(e) => handleInputChange("govtId", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>
      )}

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <label className="block text-sm mb-1">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm mb-1">Alternate Email</label>
          <input
            type="email"
            value={formData.altEmail}
            onChange={(e) => handleInputChange("altEmail", e.target.value)}
            placeholder="Enter your alternate email"
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm mb-1">Phone *</label>
          <input
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm mb-1">Alt Phone</label>
          <input
            value={formData.altPhone}
            onChange={(e) => handleInputChange("altPhone", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>


      </div>


      <div>
        <label className="block text-sm mb-1">Address *</label>
        <textarea
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
        />
      </div>

      {/* Emergency Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm mb-1">Emergency Name *</label>
          <input
            value={formData.emergencyName}
            onChange={(e) => handleInputChange("emergencyName", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Relation *</label>
          <input
            value={formData.emergencyRelation}
            onChange={(e) => handleInputChange("emergencyRelation", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Emergency Phone *</label>
          <input
            value={formData.emergencyPhone}
            onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
            className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
          />
        </div>
      </div>

      {/* Accompanying Person Section */}
      <div className="space-y-4">
        <p className="text-gray-700 font-medium">
          Will you be bringing an accompanying person? <span className="text-red-500">*</span>
        </p>
        <p className="text-xs text-gray-500">
          Accompanying persons must be 18 years or older. They may attend ceremonies, cultural
          events, exhibitions, and the book fair, but are not permitted in scientific sessions.
        </p>

        {/* Yes/No */}
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="accompanying"
              value="no"
              checked={formData.accompanying === "no"}
              onChange={(e) => handleInputChange("accompanying", e.target.value)}
              className="accent-[#972620] border border-[#CCCCCC]"
            />
            No
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="accompanying"
              value="yes"
              checked={formData.accompanying === "yes"}
              onChange={(e) => {
                handleInputChange("accompanying", e.target.value)
                if (e.target.value === "yes" && !formData.accompanyingCount) {
                  handleInputChange("accompanyingCount", 1)
                }
              }}
              className="accent-[#972620] border border-[#CCCCCC]"
            />
            Yes
          </label>
        </div>

        {/* If Yes */}
        {formData.accompanying === "yes" && (
          <div className="space-y-6">
            {/* Number of Persons */}
            <div>
              <label className="block text-sm font-medium mb-1">Number of Accompanying Persons *</label>
              <select
                value={formData.accompanyingCount || 1}
                onChange={(e) => handleInputChange("accompanyingCount", Number(e.target.value))}
                className="w-40 px-3 py-2 border border-[#CCCCCC] rounded-lg"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>

            {/* Person Details */}
            {(formData.accompanyingPersons || []).slice(0, formData.accompanyingCount || 1).map((person, index) => {
              return (
                <div key={index} className="p-4 border border-[#CCCCCC] rounded-lg-lg space-y-4">
                  <h3 className="font-medium">
                    {index === 0 ? "1st Accompanying Person" : "2nd Accompanying Person"}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={person.fullName || ""}
                        onChange={(e) =>
                          updateAccompanyingPerson(index, "fullName", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Passport / ID Number *</label>
                      <input
                        type="text"
                        value={person.passportId || ""}
                        onChange={(e) =>
                          updateAccompanyingPerson(index, "passportId", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Nationality *</label>
                      <input
                        type="text"
                        value={person.nationality || ""}
                        onChange={(e) =>
                          updateAccompanyingPerson(index, "nationality", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Relation with Delegate *</label>
                      <select
                        value={person.relation || ""}
                        onChange={(e) =>
                          updateAccompanyingPerson(index, "relation", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
                      >
                        <option value="">-- Select Relation --</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Child">Child</option>
                        <option value="Parent">Parent</option>
                        <option value="Colleague">Colleague</option>
                        <option value="Friend">Friend</option>
                        <option value="Other">Other (specify)</option>
                      </select>
                      {person.relation === "Other" && (
                        <input
                          type="text"
                          placeholder="Please specify"
                          value={person.relationOther || ""}
                          onChange={(e) =>
                            updateAccompanyingPerson(index, "relationOther", e.target.value)
                          }
                          className="mt-2 px-3 py-2 border border-[#CCCCCC] rounded-lg w-full"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Date of Birth *</label>
                      <DatePicker
                        selected={person.dob ? new Date(person.dob) : null}
                        onChange={(date) =>
                          updateAccompanyingPerson(index, "dob", date ? date.toISOString().split("T")[0] : "")
                        }
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select DOB"
                        className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-1">Email / Phone (optional)</label>
                      <input
                        type="text"
                        value={person.contact || ""}
                        onChange={(e) =>
                          updateAccompanyingPerson(index, "contact", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm mb-1">Special Requirements (optional)</label>
                      <textarea
                        value={person.specialReq || ""}
                        onChange={(e) =>
                          updateAccompanyingPerson(index, "specialReq", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-[#CCCCCC] rounded-lg"
                      />
                    </div>
                  </div>
                  {/* Auto fields  */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    {/* <p>
                      <strong>Accompanying Person Fee:</strong>
                    </p> */}
                    <p>
                      <strong>Main Delegate:</strong> {formData.fullName || "—"}
                    </p>
                    <p>
                      <strong>Delegate Registration ID:</strong>{" "}
                      {formData.registrationId || "Auto-generated"}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Step2
