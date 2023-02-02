import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      recipientId: 'any_recipient_id',
      content: 'any_content',
      category: 'any_category',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});