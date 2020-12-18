export class Body {
  public id: string;
  public englishName: string;
  public isPlanet: string;
  public inclination: number;
  public density: number;
  public gravity: number;
  public meanRadius: number;

  public mass: {
    massValue: number,
    massExponent: number
  };

  public vol: {
    volValue: number,
    volExponent: number
  };

  public moons: [
    {
      moon: string,
      rel: string
    }
  ];

  public aroundPlanet: [
    {
      planet: string,
      rel: string
    }
  ];
}




