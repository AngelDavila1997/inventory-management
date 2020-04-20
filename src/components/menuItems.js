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

/*
export function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}
*/

export const items = [
  { name: "home", label: "Inicio", Icon: HomeIcon , to: "/dash"},
  "divider",
  {
    name: "articulo",
    label: "Artículos",
    Icon: EmojiObjectsIcon,
    items: [
      { name: "addnewarticle", label: "Nuevo Artículo", to: "/add" },
      { name: "articles", label: "Artículos Disponibles", to: "/art" }
    ]
  },
  "divider",
  {
    name: "proveedor",
    label: "Proveedores",
    Icon: BusinessCenterIcon,
    items: [
      { name: "addnewprovider", label: "Nuevo Proveedor" },
      { name: "providers", label: "Proveedores Disponibles" }
    ]
  },
  "divider",
  {
    name: "movimiento",
    label: "Movimientos",
    Icon: ReceiptIcon,
    items: [
      { name: "addnewmovement", label: "Nuevo Movimiento" },
      { name: "movements", label: "Movimientos Realizados" }
    ]
  },
    "divider",
  {
    name: "reports",
    label: "Reportes",
    Icon: LibraryBooksIcon,
    items: [
      { name: "inventoryvalue", label: "Valor Actual del Inventario" },
      { name: "restock", label: "Resurtir Almacén" },
      { name: "inactivity", label: "Inactividad de Artículos" },
      "divider",
      {
        name: "lists",
        label: "Listados",
        Icon: ListIcon,
        items: [
          { name: "articlelist", label: "Articulos" },
          { name: "movementlist", label: "Movimientos" }
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
      { name: "addnewuser", label: "Nuevo Usuario" },
    ]
  },
    "divider",
  {
    name: "settings",
    label: "Configuración",
    Icon: SettingsIcon,
    items: [
      { name: "insurance", label: "Insurance" },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { name: "email", label: "Email" },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              { name: "schedule", label: "Schedule" },
            ]
          },
        ]
      }
    ]
  }
];