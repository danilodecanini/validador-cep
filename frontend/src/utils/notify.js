import { store } from 'react-notifications-component';

function notify(
  type,
  title,
  message,
  duration = 5000,
  animationIn = 'animate__fadeIn',
  animationOut = 'animate__fadeOut'
) {
  store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', animationIn],
    animationOut: ['animate__animated', animationOut],
    dismiss: {
      duration,
      onScreen: true,
    },
  });
}
export default notify;
