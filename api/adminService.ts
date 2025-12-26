import api from './axiosInstance';

export const adminService = {
  // Dashboard APIs
  dashboard: {
    getStats: () => api.get('/admin/dashboard/stats'),
    getRidesPerHour: () => api.get('/admin/dashboard/rides-per-hour'),
    getRevenueMetrics: (days: number = 7) => api.get(`/admin/dashboard/revenue-metrics?days=${days}`),
    getRecentTrips: (limit: number = 10) => api.get(`/admin/dashboard/recent-trips?limit=${limit}`),
  },

    //Driver api's
  drivers: {
    getAll: (params?: { search?: string; status?: string; page?: number; limit?: number }) => 
      api.get('/admin/drivers', { params }),
    
    getStats: () => api.get('/admin/drivers/stats'),
    
    getById: (id: string) => api.get(`/admin/drivers/${id}`),
    
    getTrips: (id: string, params?: { page?: number; limit?: number }) => 
      api.get(`/admin/drivers/${id}/trips`, { params }),
    
    create: (data: any) => api.post('/admin/drivers', data),
    
    updateStatus: (id: string, data: { isActive: boolean }) => 
      api.patch(`/admin/drivers/${id}/status`, data),
    
    uploadDocuments: (id: string, formData: FormData) => 
      api.post(`/admin/drivers/${id}/documents`, formData),
  },

   //Trip api's
  trips: {
    getDailyTrips: () => api.get('/admin/trips/daily'),
    
    getWeeklyPerformance: () => api.get('/admin/trips/weekly'),
    
    getMonthlyPerformance: () => api.get('/admin/trips/monthly'),
  },

      //Payment apis
  payments: {
    getStats: () => api.get('/admin/payments/stats'),
    
    getPayments: (params?: { page?: number; limit?: number }) => 
      api.get('/admin/payments', { params }),
    
    getAnalytics: (range: string = 'week') => 
      api.get(`/admin/payments/analytics?range=${range}`),
    
    getRefunds: () => api.get('/admin/refunds'),
    
    processRefund: (id: string) => api.patch(`/admin/refunds/${id}/process`),
  },

   //User Management APIs
  users: {
    getUsers: (params?: { search?: string; page?: number; limit?: number }) => 
      api.get('/admin/users', { params }),
    
    updateUserStatus: (id: string, data: { isBlocked: boolean }) => 
      api.patch(`/admin/users/${id}/status`, data),
    
    getUserHistory: (id: string) => api.get(`/admin/users/${id}/history`),
  },
}; 