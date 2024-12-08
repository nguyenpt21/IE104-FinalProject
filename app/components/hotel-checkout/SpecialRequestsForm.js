import { Checkbox } from "antd";

const SpecialRequestsForm = () => {
    return (
        <div className="flex max-w-6xl mx-auto p-6 gap-[50px]">
        <Paper className="w-2/3 p-6 mt-2" elevation={3}>
            <Typography variant="h6" className="mb-4 font-bold">Bạn có yêu cầu nào không?</Typography>
            <FormControlLabel control={<Checkbox />} label="Phòng không hút thuốc" />
            <FormControlLabel control={<Checkbox />} label="Tầng lầu" />
            <FormControlLabel control={<Checkbox />} label="Giờ nhận phòng" />
            <FormControlLabel control={<Checkbox />} label="Khác" />
            <FormControlLabel control={<Checkbox />} label="Phòng liên thông" />
            <FormControlLabel control={<Checkbox />} label="Loại giường" />
            <FormControlLabel control={<Checkbox />} label="Giờ trả phòng" />
        </Paper>
        </div>
    );
};

export default SpecialRequestsForm; 