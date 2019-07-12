declare module 'react-native-healthkit' {
	export interface HealthKitPermissions {
		permissions: {
			read: string[];
			write: string[];
		};
	}

	export interface AppleHealthKit {
		initHealthKit(
			permissions: HealthKitPermissions,
			callback: (error: string, result: Object) => void
		): void;
		isAvailable(callback: (error: Object, results: boolean) => void): void;
		Constants: {
			Permissions: {};
		};
	}

	const appleHealthKit: AppleHealthKit;
	export default appleHealthKit;
}
