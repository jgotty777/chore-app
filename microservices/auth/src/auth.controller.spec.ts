import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

describe("AppController", () => {
  let appController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    appController = app.get<AuthController>(AuthController);
  });

  describe("root", () => {
    it('should return true if user authenticates"', async () => {
      expect(
        await appController.signIn({ userName: "test", loginPin: 1 }),
      ).toBe(true);
    });
  });
});
