const getMenuData = () => (
    [
        {
            id: "user-management",
            label: "User Management",
            icon: "user",
            parent: "#",
            link: "",
            children: [
                {
                    id: "authentication",
                    label: "Authentication",
                    icon: "lock",
                    parent: "user-management",
                    children: [],
                    link: "",
                }, {
                    id: "authorization",
                    label: "Authorization",
                    icon: "globe",
                    parent: "user-management",
                    children: [],
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