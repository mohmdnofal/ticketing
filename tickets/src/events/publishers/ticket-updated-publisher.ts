import { Publisher, Subjects, TicketUpdatedEvent } from '@moticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
