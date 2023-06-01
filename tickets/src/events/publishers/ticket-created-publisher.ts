import { Publisher, Subjects, TicketCreatedEvent } from '@moticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
