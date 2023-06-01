import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@moticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
