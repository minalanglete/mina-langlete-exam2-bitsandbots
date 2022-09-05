import { useForm } from "react-hook-form";

function FormCheckout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-checkout">
      <div className="form-checkout-line">
        <label>name</label>
        <input {...register("Name", { required: true })} />
        {errors.Name && <span>Do you have a name?</span>}
      </div>
      <div className="form-checkout-line">
        <label>adress</label>
        <input {...register("Adress", { required: true })} />
        {errors.Adress && <span>Adress Please</span>}
      </div>
      <div className="form-checkout-line">
        <label>creditcard</label>
        <input {...register("creditCard", { required: true })} />
        {errors.creditCard && <span>No paying, no gaming</span>}
      </div>
      <div className="pay-container">
        <button className="pay-button">
          <a href="/home">Pay</a>
        </button>
      </div>
    </form>
  );
}

export default FormCheckout;
