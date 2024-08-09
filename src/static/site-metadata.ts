interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running log',
  siteUrl: 'https://jiayunlong228.github.io/running_page/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://jiayunlong228.github.io',
    },
    {
      name: 'About',
      url: 'https://github.com/jiayunlong228/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
