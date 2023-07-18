export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About Us',
        url:'/about',
    },
    {
        title: 'Courses',
        url: '/courses',
        subMenu: [
            {
                title: 'Mathematics',
                url: 'mathematics',
            },
            {
                title: 'Special Courses',
                url: 'specialCourses',
                subMenu: [
                    {
                        title: '21 Days Gupta Classes',
                        url: '21DaysGuptaClasses',
                    },
                    {
                        title: 'Yoga',
                        url: 'yoga',
                    }
                ]
            }
        ]
    },
    {
        title: 'Events',
        url:'/events',
    },
    {
        title: 'Blogs',
        url:'/blogs',
    },
    {
        title: 'Admission Form',
        url:'/admissionForm',
        subMenu: [
            {
                title: 'Mathematics Class',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSc9WbpWOV_evAEhCiQ4B8A1H-5KXS19ItbBnmKTPYW2O4tf0Q/viewform',
            },
            {
                title: '21 Days Gupta Class',
                url: '#',
            },
            {
                title: 'Yoga',
                url: '#',
            }
        ]
    },
    {
        title: 'Contact Us',
        url:'/contact',
    },
];