import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [toggleClass, setToggleClass] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const annoyingSubmitButton = () => {
    if (formData.password.length < 12) {
      setToggleClass((prevState) => !prevState);
    }
  };

  return (
    <div className=" px-4 py-16">
      <div className="mx-auto max-w-lg bg-black rounded">
        <div
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg py-28 px-4 shadow-lg "
        >
          <p className="text-center text-lg font-medium">Sign in to your account</p>

          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                name="email"
                autoComplete={false}
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
            </div>
          </div>
            <div className="">
          <button
           
            className={`${toggleClass?"float_left":"float_right"
            } rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white`}
            onMouseEnter={(e) => {
              e.preventDefault();
              annoyingSubmitButton();
            }}
          >
            Sign in
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
