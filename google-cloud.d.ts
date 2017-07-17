declare namespace GoogleCloudPlatform {

    export namespace CloudFunctions {
        export interface PubsubEvent {
            eventId: string
            timestamp: Date // ISO 8601
            eventType: string
            resource: string
            data: PubSub.PubsubMessage
        }

        export interface StorageEvent {
            eventId?: string
            timestamp: Date // ISO 8601
            eventType: string
            resource: string
            data: Storage.StorageMessage
        }

        type Callback = () => void;
    }

    // From v.0.13.1
    // https://www.npmjs.com/package/@google-cloud/pubsub
    export namespace PubSub {
        /**
         * A message data and its attributes. The message payload must not be empty;
         * it must contain either a non-empty data field, or at least one attribute.
         *
         * @property {string} data
         *   The message payload.
         *
         * @property {Object.<string, string>} attributes
         *   Optional attributes for this message.
         *
         * @property {string} messageId
         *   ID of this message, assigned by the server when the message is published.
         *   Guaranteed to be unique within the topic. This value may be read by a
         *   subscriber that receives a `PubsubMessage` via a `Pull` call or a push
         *   delivery. It must not be populated by the publisher in a `Publish` call.
         *
         * @property {Object} publishTime
         *   The time at which the message was published, populated by the server when
         *   it receives the `Publish` call. It must not be populated by the
         *   publisher in a `Publish` call.
         *
         *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
         *   Example: "2017-07-17T07:35:53.742Z"
         *
         * @class
         * @see [google.pubsub.v1.PubsubMessage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto}
         */
        export interface PubsubMessage {
            data?: string
            attributes: { [key: string]: string; }
            messageId: string
            publishTime: string
        }
    }

    export namespace Storage {
        export interface StorageMessage {
            kind?: string
            resourceState?: string
            id?: string
            selfLink?: string
            name?: string
            bucket?: string
            generation?: number
            metageneration?: number
            contentType?: string
            timeCreated?: Date
            updated?: Date
            storageClass?: string
            size?: number
            md5Hash?: string
            mediaLink?: string
            crc32c?: string
        }
    }
}
