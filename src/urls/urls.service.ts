import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from './urls.model';

@Injectable()
export class UrlsService {
  constructor(@InjectModel('Url') private urlModel: Model<Url>) {}

  async createUrl(url: String, slug: String) {
    const newUrl = new this.urlModel({ url, slug });
    const doesExist = await this.verifySlug(slug);
    if (doesExist.length > 0) {
      return { err: true };
    } else {
      const result = await newUrl.save();
      return { data: `localhost:3000/urls/${slug}`, err: false };
    }
  }

  async verifySlug(slug: String): Promise<Array<Url>> {
    const result = await this.urlModel.find({ slug: slug });
    return result;
  }

  async getUrl(slug: String): Promise<Array<Url>> {
    const result = await this.verifySlug(slug);
    return result;
  }
}
