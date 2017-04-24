import { TaskManagementAppPage } from './app.po';

describe('task-management-app App', function() {
  let page: TaskManagementAppPage;

  beforeEach(() => {
    page = new TaskManagementAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    //noinspection TypeScriptUnresolvedFunction
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
