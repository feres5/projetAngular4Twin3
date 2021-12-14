import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'Rayons',
    icon: 'icon-pie-chart',
    children: [
      {
        name: '  All rayons',
        url: '/rayons',
        icon: 'icon-pie-chart'
      },
      {
        name: '  Add rayon',
        url: '/rayons/add',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'Promotions',
    icon: 'icon-pie-chart',
    children: [
      {
        name: '  All promotions',
        url: '/promotions',
        icon: 'icon-pie-chart'
      },
      {
        name: '  Add rayon',
        url: '/promotions/add',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'produits',
    icon: 'icon-pie-chart',
    children: [
      {
        name: '  Produits',
        url: '/produit/new',
        icon: 'icon-pie-chart'
      },
      {
        name: '   ajout produit',
        url: '/produit/ajouter',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'fournisseurs',
    icon: 'icon-pie-chart',
    children: [
      {
        name: '  fournisseurs',
        url: '/fournisseur/afficherF',
        icon: 'icon-pie-chart'
      },
      {
        name: '   ajout fournisseur',
        url: '/fournisseur/ajouterF',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'clients',
    icon: 'icon-pie-chart',
    children: [
      {
        name: '  clients',
        url: '/client/listclient',
        icon: 'icon-pie-chart'
      },
      {
        name: '   ajout client',
        url: '/client/addclient',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'stocks',
    icon: 'icon-pie-chart',
    children: [
      {
        name: '  stocks',
        url: '/stock/liststock',
        icon: 'icon-pie-chart'
      },
      {
        name: '   ajout stock',
        url: '/stock/addstock',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'facture',
    icon: 'icon-pie-chart',
    url: '/facture',
  },
  {
    name: 'livraison',
    icon: 'icon-pie-chart',
    url: '/livraison',
  }
];
