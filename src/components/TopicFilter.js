import { useQueryParams } from 'hooks';

export const TopicFilter = () => {
  const { topic, changeTopic } = useQueryParams();

  return (
    <input
      type="text"
      value={topic}
      onChange={evt => changeTopic(evt.target.value)}
    />
  );
};