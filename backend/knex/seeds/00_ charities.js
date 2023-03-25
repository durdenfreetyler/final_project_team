/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("charities").del();
  await knex("charities").insert([
    {
      name: "American Red Cross",
      description:
        "The American Red Cross provides emergency assistance, disaster relief, and education inside the United States. They offer services for military families, blood donation, and health and safety courses among other things.",
      website: "https://www.redcross.org/",
      logo_url:
        "https://www.redcross.org/etc/designs/redcross/images/red-cross-share-image.jpg",
      donation_target: 50000,
    },
    {
      name: "Doctors Without Borders",
      description:
        "Doctors Without Borders provides medical assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare. They operate in over 70 countries and help people regardless of their race, religion, or political affiliation.",
      website: "https://www.doctorswithoutborders.org/",
      logo_url:
        "https://cdn.doctorswithoutborders.org/sites/default/files/styles/1260x700/public/msf_media/images/2022_03_17_q5a0092_preview.jpg?itok=c5R5KImn",
      donation_target: 100000,
    },
    {
      name: "St. Jude Children's Research Hospital",
      description:
        "St. Jude Children's Research Hospital is a pediatric treatment and research facility focused on children's catastrophic diseases, particularly leukemia and other cancers. The hospital has helped push overall survival rates for childhood cancers from less than 20 percent when the institution opened in 1962 to 80 percent today.",
      website: "https://www.stjude.org/",
      logo_url:
        "https://www.stjude.org/content/dam/en_US/images/about-st-jude/stjude-logo-horz.svg",
      donation_target: 75000,
    },
    {
      name: "World Wildlife Fund",
      description:
        "The World Wildlife Fund is an international non-governmental organization dedicated to the conservation of nature, the reduction of the most pressing threats to the diversity of life on Earth, and the building of a future in which humans live in harmony with nature.",
      website: "https://www.worldwildlife.org/",
      logo_url: "https://d2ouvy59p0dg6k.cloudfront.net/img/wwf-logo.svg",
      donation_target: 90000,
    },
    {
      name: "Feeding America",
      description:
        "Feeding America is a United States-based nonprofit organization that is a nationwide network of more than 200 food banks that feed more than 46 million people through food pantries, soup kitchens, shelters, and other community-based agencies.",
      website: "https://www.feedingamerica.org/",
      logo_url:
        "https://www.feedingamerica.org/sites/default/themes/feeding-america/img/logo.png",
      donation_target: 60000,
    },
    {
      name: "Human Rights Watch",
      description:
        "Human Rights Watch is an international non-governmental organization, headquartered in New York City, that conducts research and advocacy on human rights. The group pressures some governments, policymakers, and human rights abusers to denounce abuse and respect human rights, and the group often works on behalf of refugees, children, migrants, and political prisoners.",
      website: "https://www.hrw.org/",
      logo_url:
        "https://www.hrw.org/sites/default/files/assets/images/hrw_logo-03.png",
      donation_target: 80000,
    },
    {
      name: "Charity: Water",
      description:
        "Brings clean and safe drinking water to people in developing countries.",
      website: "https://www.charitywater.org/",
      logo_url: "https://www.charitywater.org/img/logo_black.png",
      donation_target: 200000,
    },
    {
      name: "Cancer Research Institute",
      description:
        "Dedicated to advancing the discovery and development of powerful immunotherapies for all types of cancer.",
      website: "https://www.cancerresearch.org/",
      logo_url:
        "https://www.cancerresearch.org/themes/custom/cri/images/logo.svg",
      donation_target: 300000,
    },
  ]);
};

