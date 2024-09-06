import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

export class TestAction {
  static readonly type = '[Test] Action';
  constructor(public payload: string) {}
}

@State<string>({ name: 'appState', defaults: 'hello world' })
@Injectable()
export class TestAppState {
  @Action(TestAction)
  testAction(ctx: StateContext<string>, { payload }: TestAction) {
    ctx.setState(payload);
  }
}
