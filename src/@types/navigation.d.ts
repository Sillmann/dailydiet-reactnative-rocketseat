export declare global{
  namespace ReactNavigation{
    interface RootParamList{
      home: undefined;
      good: undefined;
      bad: undefined;
      statistics: {
        percentagem: number;
        type?: string;
      };
      refeicao: undefined;
      detmeal: {
        id: number;
        title: string;
        refeicao: string;
        descricao: string;
        hora: string;
        dentroDieta: boolean;
        type: 'PRIMARY' | 'SECONDARY';
      },
      editmeal: {
        idRefeicao: number;
        dataRefeicao: string;
        nomeRefeicao: string;
        descricaoRefeicao: string;
        horaRefeicao: string;
        dentroDietaRefeicao: boolean;
        typeRefeicao: 'PRIMARY' | 'SECONDARY';
      }
    }
  }
}