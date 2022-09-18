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

  function payOrder() {
    window.confirm("Pay and get your game!");
    window.location.href = "/home";
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-checkout">
      <div className="form-checkout-line">
        <label>name</label>
        <input {...register("Name", { required: true })} />
        <br />
        {errors.Name && <span>Do you have a name?</span>}
      </div>
      <div className="form-checkout-line">
        <label>adress</label>
        <input {...register("Adress", { required: true })} />
        <br />
        {errors.Adress && <span>Adress Please</span>}
      </div>
      <div className="form-checkout-line">
        <label>creditcard</label>
        <input {...register("creditCard", { required: true })} />
        <br />
        {errors.creditCard && <span>No paying, no gaming</span>}
      </div>

      <div className="pay-container">
        <button className="pay-button" onClick={payOrder}>
          <a href="/home">Pay</a>
        </button>
      </div>
    </form>
  );
}

export default FormCheckout;
