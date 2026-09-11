import React, { useState, useEffect } from 'react';
import {
  Users,
  Search,
  ShieldCheck,
  UserX,
  UserCheck,
  ShieldAlert,
  Mail,
  Phone,
  Calendar,
  Sparkles,
  Award,
  AlertCircle
} from 'lucide-react';
import { adminAPI } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { Pagination } from '../../components/common/Pagination';
import { useToast } from '../../context/ToastContext';

export const AdminUsers = () => {
  const { showToast } = useToast();
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('all');
  const [inspectUser, setInspectUser] = useState(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await adminAPI.getUsers({
        search: search.trim() || undefined,
        role: role === 'all' ? undefined : role,
        page: currentPage,
        limit: itemsPerPage
      });
      if (res.data.success) {
        setUsers(res.data.data.users || []);
        if (res.data.data.pagination) {
          setPagination(res.data.data.pagination);
        }
      }
    } catch (err) {
      console.error(err);
      showToast('Failed to load users list', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [search, role, currentPage, itemsPerPage]);

  const handleToggleBlock = async (user) => {
    try {
      const res = await adminAPI.toggleBlockUser(user.id);
      if (res.data.success) {
        showToast(res.data.message, user.is_blocked ? 'success' : 'warning');
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, is_blocked: !u.is_blocked } : u))
        );
      }
    } catch (err) {
      showToast(err.message || 'Failed to update user status', 'error');
    }
  };

  const handleToggleRole = async (user) => {
    try {
      const res = await adminAPI.toggleUserRole(user.id);
      if (res.data.success) {
        showToast(res.data.message, 'success');
        setUsers((prev) =>
          prev.map((u) =>
            u.id === user.id ? { ...u, role: u.role === 'admin' ? 'customer' : 'admin' } : u
          )
        );
      }
    } catch (err) {
      showToast(err.message || 'Failed to change user role', 'error');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <Users className="w-7 h-7 text-indigo-400" />
            Customer Accounts & Security
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage user directory, role permissions, reward points, and account security locks.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search users by name, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Role Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 font-medium focus:outline-none focus:border-indigo-500 w-full sm:w-auto"
          >
            <option value="all">All Roles</option>
            <option value="customer">Customers Only</option>
            <option value="admin">Admins Only</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      {loading ? (
        <Loader text="Loading user accounts..." />
      ) : (
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800/90 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-400 bg-slate-950/60 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">User Profile</th>
                  <th className="py-4 px-4">Contact Info</th>
                  <th className="py-4 px-4">Role Access</th>
                  <th className="py-4 px-4">Points</th>
                  <th className="py-4 px-4">Account Status</th>
                  <th className="py-4 px-6 text-right">Security Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500 font-bold">
                      No user accounts found matching your search.
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                            {u.name ? u.name.charAt(0).toUpperCase() : 'U'}
                          </div>
                          <div>
                            <p className="font-bold text-white text-sm">{u.name}</p>
                            <p className="text-[10px] text-slate-500">ID #{u.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 space-y-0.5">
                        <p className="text-slate-300 flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-slate-500" />
                          <span>{u.email}</span>
                        </p>
                        {u.phone && (
                          <p className="text-[11px] text-slate-500 flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-slate-600" />
                            <span>{u.phone}</span>
                          </p>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 ${
                            u.role === 'admin'
                              ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {u.role === 'admin' ? <ShieldCheck className="w-3 h-3" /> : null}
                          <span>{u.role.toUpperCase()}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-bold text-amber-400 flex items-center gap-1 text-[11px]">
                          <Award className="w-3 h-3" />
                          <span>{u.points_balance || 0} pts</span>
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            u.is_blocked
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}
                        >
                          {u.is_blocked ? 'Blocked' : 'Active'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleToggleRole(u)}
                            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors"
                            title="Toggle Admin/Customer Role"
                          >
                            {u.role === 'admin' ? 'Make Customer' : 'Make Admin'}
                          </button>
                          <button
                            onClick={() => handleToggleBlock(u)}
                            className={`p-2 rounded-xl text-xs font-bold transition-colors ${
                              u.is_blocked
                                ? 'bg-emerald-500/10 hover:bg-emerald-600 text-emerald-400 hover:text-white'
                                : 'bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white'
                            }`}
                            title={u.is_blocked ? 'Unblock User' : 'Block User'}
                          >
                            {u.is_blocked ? <UserCheck className="w-4 h-4" /> : <UserX className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Pagination */}
          <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.pages}
              totalItems={pagination.total}
              itemsPerPage={itemsPerPage}
              onPageChange={(p) => setCurrentPage(p)}
              onLimitChange={(l) => {
                setItemsPerPage(l);
                setCurrentPage(1);
              }}
              limitOptions={[10, 15, 30, 50]}
              showLimitSelector={true}
              showQuickJump={true}
              showSummary={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};
