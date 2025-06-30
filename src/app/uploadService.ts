export interface UploadProvider {
  upload: () => Promise<{ url: string; name: string; size: number }>;
  delete?: () => Promise<void>;
}

export class UploadService {
  private provider: UploadProvider;

  constructor(provider: UploadProvider) {
    this.provider = provider;
  }

  setProvider(provider: UploadProvider) {
    this.provider = provider;
  }

  async upload() {
    return this.provider.upload();
  }

  async delete() {
    if (this.provider.delete) {
      return this.provider.delete();
    }
    throw new Error('Delete not implemented for this provider');
  }
}
