export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Career',
        url: '/career',
        submenu: [
            {
                title: 'Class 12',
                url: 'class12',
                submenu: [
                    {
                        title: 'Medical',
                        url: 'medical',
                    },
                    {
                        title: 'Non Medical',
                        url: 'nonmedical',
                    }
                ]
            },
            {
                title: 'Graduation',
                url: 'graduation',
                submenu: [
                    {
                        title: 'MTech',
                        url: 'mtech',
                    },
                    {
                        title: 'MBA',
                        url: 'mba',
                    }
                ]
            }
        ]
    },
    {
        title: 'About Us',
        url:'/about',
    },
    {
        title: 'Contact Us',
        url:'/contact',
    },
];