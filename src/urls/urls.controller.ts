import { UrlsService } from './urls.service';
import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';

@Controller('urls')
export class UrlsController {
  constructor(private UrlsService: UrlsService) {}

  @Post()
  async createUrl(
    @Body('url') url: String,
    @Body('slug') slug: String,
  ): Promise<Object> {
    let result;
    const res = await this.UrlsService.createUrl(url, slug);
    if (res.err) {
      console.log(res);
      result = { code: 1, text: 'Already in use, pick another slug' };
      return result;
    } else {
      result = { code: 2, text: 'Tinyurl created', url: res.data };
      return result;
    }
  }

  @Get(':slug')
  @Redirect()
  async redirectToUrl(@Param() params) {
    const result = await this.UrlsService.getUrl(params.slug);
    return { url: result[0].url };
  }
}
