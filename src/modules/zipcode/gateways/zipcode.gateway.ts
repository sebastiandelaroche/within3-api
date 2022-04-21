import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

type FetchZipCodeParams = {
  country: string;
  postalCode: string;
};

@Injectable()
export class ZipCodeGateway {
  private readonly HOST = 'http://api.zippopotam.us';

  constructor(private readonly httpService: HttpService) {}

  fetchZipCode(params: FetchZipCodeParams) {
    const { country, postalCode } = params;
    const url = `${this.HOST}/${country}/${postalCode}`;

    return new Promise((resolve, reject) => {
      this.httpService.get(url).subscribe(
        (data) => resolve(data?.data),
        (error) => {
          if (error?.response?.status === 404) return resolve({});
          reject(error);
        },
      );
    });
  }
}
