import HomeIcon from "@material-ui/icons/Home";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ReceiptIcon from "@material-ui/icons/Receipt";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ListIcon from '@material-ui/icons/List';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";

//export function onClick(e, item) {
  //window.alert(JSON.stringify(item, null, 2));
//}

export const items = [
  { name: "home", label: "Inicio", Icon: HomeIcon, to:"/dash"},
  "divider",
  {
    name: "articulo",
    label: "Artículos",
    Icon: EmojiObjectsIcon,
    items: [
      { name: "addnewarticle", label: "Nuevo Artículo", to: "/addarticle" },
      { name: "articles", label: "Artículos Disponibles", to: "/articles" }
    ]
  },
  "divider",
  {
    name: "proveedor",
    label: "Proveedores",
    Icon: BusinessCenterIcon,
    items: [
      { name: "addnewprovider", label: "Nuevo Proveedor", to: "/addprovider" },
      { name: "providers", label: "Proveedores Disponibles", to: "/providers" }
    ]
  },
  "divider",
  {
    name: "movimiento",
    label: "Movimientos",
    Icon: ReceiptIcon,
    items: [
      { name: "addnewmovement", label: "Nuevo Movimiento", to: "/addmovement"},
      { name: "movements", label: "Movimientos Realizados", to: "/movements" }
    ]
  },
    "divider",
  {
    name: "reports",
    label: "Reportes",
    Icon: LibraryBooksIcon,
    items: [
      { name: "inventoryvalue", label: "Valor Actual del Inventario", to: "/inventoryvalue" },
      { name: "restock", label: "Resurtir Almacén", to: "/restock" },
      { name: "inactivity", label: "Inactividad de Artículos", to: "/inactivity" },
      "divider",
      {
        name: "lists",
        label: "Listados",
        Icon: ListIcon,
        items: [
          { name: "articlelist", label: "Articulos", to: "/articlelist" },
          { name: "movementlist", label: "Movimientos", to: "/movementlist" }
        ]
      }
    ]
  },
  "divider",
  {
    name: "users",
    label: "Usuarios",
    Icon: SupervisorAccountIcon ,
    items: [
      { name: "addnewuser", label: "Nuevo Usuario", to: "/addnewuser" },
      { name: "users", label: "Lista de Usuarios", to: "/userlist" },
    ]
  },
    "divider",
];