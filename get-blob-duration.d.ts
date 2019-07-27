export type Options = {
  blobIsUrl?: boolean
}

export interface GetBlobDurationInterface {
  (blob: Blob | string, options: Options): Promise<number>
  (blob: Blob): Promise<number>
}

declare const getBlobDuration: GetBlobDurationInterface

export default getBlobDuration
