import endpoint from "../../../core/constant/endpoint";
import { HttpRequestMethod, IHttpClient } from "../../../core/driver/http";
import { UserEntity } from "../../entity";
import { IUserDataSource } from "./UserDataSource";

export class UserApiDataSource implements IUserDataSource {
  constructor(private _httpClient: IHttpClient) {}

  async getAllUsers() {
    return await this._httpClient.request<{}, UserEntity[]>({
      method: HttpRequestMethod.GET,
      path: endpoint.getAllUser,
    });
  }

  async getUserById(id: number) {
    return await this._httpClient.request<{}, UserEntity>({
      method: HttpRequestMethod.GET,
      path: endpoint.getUserById.replace("${id}", id.toString()),
    });
  }
}
