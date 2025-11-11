const getMenuData = () => (
    [
        {
            id: "user-management",
            label: "User Management",
            icon: "user",
            parent: null,
            link: "",
            children: [
                {
                    id: "authentication",
                    label: "Authentication",
                    icon: "lock",
                    parent: 0,
                    children: null,
                    link: "",
                }, {
                    id: "authorization",
                    label: "Authorization",
                    icon: "globe",
                    parent: 0,
                    children: null,
                    link: "",
                }
            ]
        }, {
            id: "settings",
            label: "Settings",
            icon: "gear",
            parent: null,
            children: [],
            link: ""
        }
    ]
)

export default getMenuData;