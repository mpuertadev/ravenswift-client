class Ravenswift {
  private serverUrl: string;
  private projectRef: string;
  private projectKey: string;

  constructor(serverUrl: string, projectRef: string, projectKey: string) {
    this.serverUrl = serverUrl;
    this.projectRef = projectRef;
    this.projectKey = projectKey;
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