export interface Hero {
    name: string;
    realName: string;
};

// alternativa aos arquivos json sugeridos pelo cypress
// para serem colocados na pasta fixture
// como invocar dentro do spec (seria interessante fazer isso ser randômico):
// const hero: Hero = heroes[0];
export const heroes: Hero[] = [
    {
      name: 'Spiderman',
      realName: 'Peter Parker',
    },
    {
        name: 'Iron man',
        realName: 'Tony Stark',
    }
  ];
  