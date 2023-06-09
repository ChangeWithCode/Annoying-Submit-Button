import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [toggleClass, setToggleClass] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const annoyingSubmitButton = () => {
    if (formData.password.length < 6) {
      setToggleClass((prevState) => !prevState);
    }
  };

  return (
    <div class=" px-4 py-16">
        {console.log(toggleClass)}
      <div class="mx-auto max-w-lg bg-black rounded">
        <div
          action=""
          class="mb-0 mt-6 space-y-4 rounded-lg py-28 px-4 shadow-lg "
        >
          <p class="text-center text-lg font-medium">Sign in to your account</p>

          <div>
            <label for="email" class="sr-only">
              Email
            </label>

            <div class="relative">
              <input
                type="email"
                name="email"
                autoComplete={false}
                value={formData.email}
                onChange={handleChange}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">
              Password
            </label>

            <div class="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
            </div>
          </div>
            <div className="">
          <button
           
            class={`float-${toggleClass?"right":"left"
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
