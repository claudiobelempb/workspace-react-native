export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      create: undefined;
      statistics: {
        status: boolean;
      };
      show: {
        mealId: string;
      };
      update: {
        mealId: string;
      };
      feedback: {
        status: boolean;
      };
    }
  }
}
