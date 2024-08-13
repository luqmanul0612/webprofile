import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import styles from "./modal-message.module.scss";
import { X } from "lucide-react";
import * as yup from "yup";
import TextField from "../TextField";
import Button from "../Button";
import TextArea from "../TextArea";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().required("Required"),
});

type Message = yup.InferType<typeof validationSchema>;

type UserCreateModalProps = {
  open: boolean;
  onClose: () => void;
};

const ModalMessage: React.FC<UserCreateModalProps> = (props) => {
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
    props.onClose();
    window.open(
      `https://api.whatsapp.com/send?phone=6289602930021&text=Hello%20Nama%20saya%20${values.name}%20(${values.email})%2C%0A${values.message}`,
      "_blank"
    );
  });

  return (
    <Dialog.Root open={props.open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.dialogHeader}>
              <button
                type="button"
                className={styles.closeButton}
                aria-label="Close"
                onClick={props.onClose}
              >
                <X size={25} />
              </button>
            </div>
            <Dialog.Title className={styles.dialogTitle}>
              Let's work together!
            </Dialog.Title>
            <div className={styles.inputWrapper}>
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
            <div className={styles.buttonWrapper}>
              <Button type="submit" disabled={!form.formState.isValid}>
                Send
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalMessage;
