import * as yup from "yup";
import { getAllParents } from "../utils/helper";

const menuSchema = yup.object({
    id: yup.string().required(),
    label: yup.string().max(10).required(),
    icon: yup.string(),
    parent: yup.string().oneOf(["#", ...getAllParents().map(parentObj => parentObj.id)]).required(),
    link: yup.string().required(),
})

export default menuSchema