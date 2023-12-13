import Subscriber from './Subscriber.jsx';
import './SubscriberList.css';

function SubscriberList() {
  return (
    <div className="subscriber-list">
      <div className="subcriber-span">Подписчики</div>
      <Subscriber />
      <Subscriber />
      <Subscriber />
      <Subscriber />
      <Subscriber />
    </div>
  );
}

export default SubscriberList;
