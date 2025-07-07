import { useForm } from "react-hook-form";
import styled from "styled-components";



const Container = styled.div`
  background-color:rgb(191, 228, 209);
  padding: 40px;
  min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;
const Button = styled.button`
    background-color:rgb(17, 77, 55); /* Green */
    height: 40px;
    width: 200px;
    color: white;
      &:hover {
  
    `;



function Form() { const { register, handleSubmit, formState: { errors } } = useForm(); // ✅ كامل


const onSubmit = (data) => {
  console.log(data);
};
    return ( <Container>
       
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "الاسم مطلوب" })} placeholder="اسمك" />

        <input {...register('lastName', { required: "الاسم مطلوب" } )} placeholder="Last Name" />
        <input {...register("email", { required: "البريد الإلكتروني مطلوب" })} placeholder="البريد الإلكتروني" />
        <p>{errors.name?.message}</p>
<p>{errors.lastName?.message}</p>
<p>{errors.email?.message}</p>

<div>
  <label>نوع الاستفسار *</label>
  <div>
    <label>
      <input
        type="radio"
        value="general"
        {...register("queryType", { required: "اختاري نوع الاستفسار" })}
      />
      General Enquiry
    </label>

    <label>
      <input
        type="radio"
        value="support"
        {...register("queryType", { required: "اختاري نوع الاستفسار" })}
      />
      Support Request
    </label>
  </div>
  <p>{errors.queryType?.message}</p>
</div>

<div>
  <label>الرسالة *</label>
  <textarea
    {...register("message", { required: "الرسالة مطلوبة" })}
    placeholder="اكتبي رسالتك هنا"
  />
  <p>{errors.message?.message}</p>
</div>
<div>
  <label>
    <input
      type="checkbox"
      {...register("consent", { required: "لازم توافقين قبل الإرسال" })}
    />
    أوافق على التواصل من قبل الفريق *
  </label>
  <p>{errors.consent?.message}</p>
</div>

<Button type="submit">إرسال</Button>

        </form>
    </Container> 
    );
    }
    export default Form;

