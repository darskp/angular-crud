export interface apiResponseModel {
    message: string;
    data: any;
    result: boolean;
}

export interface GetAllEmployee {
    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    role: string
}
