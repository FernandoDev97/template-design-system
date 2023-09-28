import * as ToastPromitive from '@radix-ui/react-toast';
import { ComponentProps } from '../../types/ComponentProps';
import { X } from 'phosphor-react';
import { ToastClose, ToastDescription, ToastRoot, ToastTitle, ToastViewPort } from './styles';

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description?: string
}

export const Toast = ({ title, description, ...props }: ToastProps) => {
  return (
    <ToastPromitive.Provider >
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight='light' size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </ToastPromitive.Provider>
  )
}

Toast.displayName = 'Toast'