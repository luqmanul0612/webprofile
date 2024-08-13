import { Controller, useForm } from "react-hook-form";
import classNames from "./contact.module.scss";
import { motion } from "framer-motion";
import TextField from "../../components/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextArea from "../../components/TextArea";
import GlowCard from "../../components/GlowCard";
import { Mail, MapPin, Phone } from "lucide-react";
import GlowButton from "../../components/GlowButton";

const infoData = [
  {
    key: 1,
    label: "Phone",
    value: "+62 896-0293-0021",
    icon: <Phone />,
  },
  {
    key: 2,
    label: "Email",
    value: "luqmanul0612@gmail.com",
    icon: <Mail />,
  },
  {
    key: 3,
    label: "Address",
    value: "Yogyakarta, Indonesia",
    icon: <MapPin />,
  },
];

export const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().required("Required"),
});

type Message = yup.InferType<typeof validationSchema>;

const ContactPage = () => {
  const form = useForm<Message>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = form.handleSubmit((values) => {
    window.open(
      `https://api.whatsapp.com/send?phone=6289602930021&text=Hello%20Nama%20saya%20${values.name}%20(${values.email})%2C%0A${values.message}`,
      "_blank"
    );
  });

  return (
    <motion.div exit={{ opacity: 0 }} className={classNames.main}>
      <div className={classNames.container}>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={classNames.form}
          onSubmit={onSubmit}
          autoComplete="off"
        >
          <GlowCard size="large" className={classNames.formCard}>
            <p className={classNames.formTitle}>Get in touch</p>
            <div className={classNames.inputWrapper}>
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <TextField
                    label="Name"
                    placeholder="Type your Name"
                    value={field.value}
                    onChange={field.onChange}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <TextField
                    label="Email"
                    placeholder="Type your email"
                    value={field.value}
                    onChange={field.onChange}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    autoComplete="off"
                  />
                )}
              />
              <Controller
                control={form.control}
                name="message"
                render={({ field, fieldState }) => (
                  <TextArea
                    label="Message"
                    placeholder="Type your message"
                    value={field.value}
                    onChange={field.onChange}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </div>
            <div className={classNames.buttonWrapper}>
              <GlowButton particles={15} type="submit">
                Send Message
              </GlowButton>
            </div>
          </GlowCard>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={classNames.info}
        >
          {infoData.map((data) => (
            <motion.div
              key={data.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={classNames.infoCard}
            >
              <GlowCard className={classNames.infoCardBody}>
                <div className={classNames.infoIcon}>{data.icon}</div>
                <div className={classNames.infoContent}>
                  <p className={classNames.infoLabel}>{data.label}</p>
                  <p className={classNames.infoValue}>{data.value}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
