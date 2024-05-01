import Response from "./interfaces/IResponse";
import ServerConfig from "./interfaces/IServerConfig";

class Ravenswift {
  private serverConfig: ServerConfig;

  constructor(serverConfig: ServerConfig) {
    this.serverConfig = serverConfig;
  }

  public async addSubscriber(nickName: string, email: string): Promise<Response> {
    const response = await fetch(`${this.serverConfig.serverUrl}/projects/${this.serverConfig.projectRef}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.serverConfig.apiKey
      },
      body: JSON.stringify({ nickname: nickName, email: email })
    });
    const data = await response.json();
    return data;
  }
}

module.exports = Ravenswift;