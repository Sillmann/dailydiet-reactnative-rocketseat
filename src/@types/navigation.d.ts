export declare global{
  namespace ReactNavigation{
    interface RootParamList{
      home: undefined;
      estatisticas: {
        percentagem: number;
        type?: string;
      };
      refeicao: undefined;
      salvo: {
        type: 'PRIMARY' | 'SECONDARY'
      };
      descricao: {
        id: number;
        title: string;
        refeicao: string;
        descricao: string;
        hora: string;
        dentroDieta: boolean;
        type: 'PRIMARY' | 'SECONDARY';
      },
      editar: {
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