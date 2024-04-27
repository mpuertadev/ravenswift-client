import IResponse from "./interfaces/IResponse";

class Ravenswift {
  private serverUrl: string;
  private projectRef: string;
  private projectKey: string;

  constructor(serverUrl: string, projectRef: string, projectKey: string) {
    this.serverUrl = serverUrl;
    this.projectRef = projectRef;
    this.projectKey = projectKey;
  }

  public async addSubscriber(nickName: string, email: string): Promise<IResponse> {
    console.log('serverUrl', this.serverUrl);
    console.log('projectRef', this.projectRef);
    console.log('projectKey', this.projectKey);
    const response = await fetch(`${this.serverUrl}/projects/${this.projectRef}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.projectKey
      },
      body: JSON.stringify({ nickname: nickName, email: email })
    });
    const data = await response.json();
    return data;
  }

  public getServerUrl(): string {
    return this.serverUrl;
  }

  public getProjectRef(): string {
    return this.projectRef;
  }

  public getProjectKey(): string {
    return this.projectKey;
  }
}

module.exports = Ravenswift;